import ReactEcharts from 'echarts-for-react';
import ChartLayout from '../../../../components/ChartLayout/ChartLayout';
import ActionButton from '../../../../components/ActionButton/ActionButton';
import './TopPlatforms.css';

function TopPlatforms() {
  const option = {
    xAxis: { show: false },
    yAxis: { show: false, max: 150, min: 0 },
    grid: { height: 300, top: 0 },
    tooltip: { show: false },
    series: [
      {
        symbolSize: 214,
        data: [[130, 80]],
        type: 'scatter',
        clip: true,
        emphasis: { disabled: true },
        z: 5,
        symbol:
          'image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2IiBoZWlnaHQ9IjIxNiIgdmlld0JveD0iMCAwIDIxNiAyMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjEwNy42MzIiIGN5PSIxMDcuNjMyIiByPSIxMDcuNjMyIiBmaWxsPSIjNDY3NkVEIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kXzJfNzMxMCkiPgo8cGF0aCBkPSJNMTUzLjY3OSAxMDcuNzI3QzE1My42NzkgODIuMzIzOCAxMzMuMTExIDYxLjc1NjMgMTA3LjcwOCA2MS43NTYzQzgyLjMwNTcgNjEuNzU2MyA2MS43MzgzIDgyLjM5MTkgNjEuNzM4MyAxMDcuNzI3QzYxLjczODMgMTMwLjY3OCA3OC41NiAxNDkuNjc5IDEwMC41NTggMTUzLjE1MlYxMjEuMDA3SDg4Ljg0MzdWMTA3LjcyN0gxMDAuNDg5Vjk3LjU3OTFDMTAwLjQ4OSA4Ni4wNjk1IDEwNy4zNjggNzkuNjY3NyAxMTcuODU2IDc5LjY2NzdDMTIyLjg5NiA3OS42Njc3IDEyOC4xNCA4MC41NTMxIDEyOC4xNCA4MC41NTMxVjk1LjkyNjRIMTIyLjM1MUMxMTYuNjMgOTEuOTI2NCAxMTQuODU5IDk1LjQ2NzggMTE0Ljg1OSA5OS4wNzczVjEwNy43MjdIMTI3LjU5NUwxMjUuNTUyIDEyMS4wMDdIMTE0Ljg1OVYxNTMuMTUyQzEzNi44NTcgMTQ5Ljc0NyAxNTMuNjc5IDEzMC42NzggMTUzLjY3OSAxMDcuNzI3WiIgZmlsbD0iIzQ2NzZFRCIvPgo8cGF0aCBkPSJNMTI1LjU1MiAxMjEuMDc1TDEyNy41OTUgMTA3Ljc5NUgxMTQuODU5Vjk5LjE0NTZDMTE0Ljg1OSA5NS41MzYxIDExNi42MyA5MS45OTQ3IDEyMi4zNTEgOTEuOTk0N0gxMjguMTRWODAuNjg5NEMxMjguMTQgODAuNjg5NCAxMjIuODk2IDc5LjgwNDEgMTE3Ljg1NiA3OS44MDQxQzEwNy4zNjggNzkuODA0MSAxMDAuNDkgODYuMTM3OCAxMDAuNDkgOTcuNzE1NFYxMDcuODYzSDg4Ljg0MzhWMTIxLjE0M0gxMDAuNDlWMTUzLjI4OEMxMDIuODA1IDE1My42MjkgMTA1LjI1NyAxNTMuODMzIDEwNy42NCAxNTMuODMzQzExMC4wMjQgMTUzLjgzMyAxMTIuNDc2IDE1My42MjkgMTE0Ljc5MSAxNTMuMjg4VjEyMS4xNDNIMTI1LjU1MlYxMjEuMDc1WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzJfNzMxMCIgeD0iNTEuNzM4MyIgeT0iNTUuNzU2MyIgd2lkdGg9IjExMS45NCIgaGVpZ2h0PSIxMTIuMDc3IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzJfNzMxMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18yXzczMTAiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=='
      },
      {
        symbolSize: 194,
        data: [[190, 50]],
        type: 'scatter',
        emphasis: { disabled: true },
        z: 4,
        symbol:
          'image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg2IiBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDE4NiAxODUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjkzLjAwMDUiIGN5PSI5Mi4zOTc0IiByPSI5Mi4yNTYzIiBmaWxsPSIjMjEzQzVGIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RfMl83MzE1KSI+CjxwYXRoIGQ9Ik04OC41NTYxIDg3LjM5NjVDODYuOTk2NiA4Ny40NTIyIDg1LjQzNzEgODcuNjc1IDgzLjkzMzMgODguMTc2MkM4MS43NjExIDg4LjkwMDMgNzkuODExNyA5MC4wMTQyIDc4LjE0MDggOTEuNTczN0M3NS45MTMgOTMuNTc4OCA3NC40MDkxIDk2LjA4NTEgNzMuNjI5NCA5OC45MjU3QzczLjM1MDkgOTkuOTI4MiA3My4xODM4IDEwMC45ODYgNzMuMDcyNCAxMDIuMDQ1QzczLjAxNjcgMTAyLjY1NyA3My4wMTY3IDEwMy4zMjYgNzMuMDcyNCAxMDMuOTM4QzczLjE4MzggMTA1LjcyMSA3My41MTggMTA3LjQ0NyA3NC4xODY0IDEwOS4wNjJDNzQuOTY2MSAxMTAuOSA3NS45Njg3IDExMi41NzEgNzcuMzYxMSAxMTQuMDE5Qzc3LjM2MTEgMTE0LjA3NSA3Ny40MTY4IDExNC4wNzUgNzcuNDE2OCAxMTQuMTMxQzc3LjA4MjYgMTE0LjAxOSA3Ni44NTk4IDExMy43OTcgNzYuNTgxMyAxMTMuNTc0Qzc0LjAxOTMgMTExLjU2OSA3Mi4yMzcgMTA5LjAwNyA3MS4yMzQ0IDEwNS44MzJDNjkuOTAwMyAxMDQuNzE4IDY5LjY3NzUgMTAzLjY2IDY5LjU2NjEgMTAyLjQ5QzY5LjUxMDQgMTAxLjY1NSA2OS40NTQ3IDEwMC44MTkgNjkuNTEwNCAxMDAuMDRDNjkuNjIxOCA5OC4xNDU5IDcwLjA2NzQgOTYuMzA3OSA3MC44NDcxIDk0LjU4MTNDNzEuNjgyNiA5Mi43OTkgNzIuNzk2NSA5MS4xODM4IDc1LjE4ODkgODkuNzkxNEM3Ni44NTk4IDg4LjE3NjIgNzguNzUzNSA4Ni45NTA5IDgwLjkyNTYgODYuMTcxMUM4Mi4zMTgxIDg1LjY2OTkgODMuNzEwNSA4NS4zOTE0IDg1LjE1ODYgODUuMjhDODYuMjE2OCA4NS4yMjQzIDg3LjI3NTEgODUuMjI0MyA4OC4yNzc2IDg1LjMzNTdDODguNDQ0NyA4NS4zMzU3IDg4LjUwMDQgODUuMzkxNCA4OC41MDA0IDg1LjU1ODVDODguNTU2MSA4Ni4yMjY4IDg4LjU1NjEgODYuNzgzOCA4OC41NTYxIDg3LjM5NjVaIiBmaWxsPSIjNkFCQUM1Ii8+CjwvZz4KPC9zdmc+Cg=='
      },
      {
        symbolSize: 154,
        data: [[270, 70]],
        type: 'scatter',
        emphasis: { disabled: true },
        z: 3,
        symbol:
          'image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU1IiBoZWlnaHQ9IjE1NSIgdmlld0JveD0iMCAwIDE1NSAxNTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9Ijc3LjgwOTkiIGN5PSI3Ny4yNDMiIHI9Ijc2Ljg4MDMiIGZpbGw9IiM2NDdGOUQiLz4KPC9zdmc+Cg=='
      },
      {
        symbolSize: 122,
        data: [[360, 60]],
        type: 'scatter',
        emphasis: { disabled: true },
        z: 2,
        symbol:
          'image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjYxLjY4MSIgY3k9IjYxLjczMzgiIHI9IjYxLjUwNDIiIGZpbGw9IiM0NzdBQjkiLz4KPC9zdmc+Cg=='
      },
      {
        symbolSize: 92,
        data: [[440, 80]],
        type: 'scatter',
        emphasis: { disabled: true },
        z: 1,
        symbol:
          'image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTMiIGhlaWdodD0iOTMiIHZpZXdCb3g9IjAgMCA5MyA5MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDYuMTI4MiIgY3k9IjQ2LjgwMDYiIHI9IjQ2LjEyODIiIGZpbGw9IiM4RjU0NEEiLz4KPC9zdmc+Cg=='
      }
    ]
  };

  return (
    <ChartLayout
      name="Top platforms"
      button={<ActionButton name="Show" content="All" className="hidden" />}
      className="topPlatforms"
    >
      <ReactEcharts option={option} />
    </ChartLayout>
  );
}

export default TopPlatforms;
