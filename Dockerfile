FROM busybox:1.28
ARG TARGETARCH
RUN --mount=target=/tmp-mount \
    mkdir -p /khulnasoft-plugins/grafana-clickhouse-datasource && \
    cp -raf /tmp-mount/plugin-${TARGETARCH}/grafana-clickhouse-datasource/* /khulnasoft-plugins/grafana-clickhouse-datasource/
COPY khulnasoft-apptracing-panel/dist  /khulnasoft-plugins/khulnasoft-apptracing-panel
COPY khulnasoft-querier-datasource/dist  /khulnasoft-plugins/khulnasoft-querier-datasource
COPY khulnasoft-topo-panel/dist /khulnasoft-plugins/khulnasoft-topo-panel
CMD ["/bin/sh", "-c", "cp -raf /khulnasoft-plugins/* /var/lib/grafana/plugins/"]
