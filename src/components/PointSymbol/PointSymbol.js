import React from 'react'
import './PointSymbol.scss'

const PointSymbol = () => (
    <img alt="point" className="pointSymbol" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDM3MC4wNCAzNzAuMDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM3MC4wNCAzNzAuMDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnIGlkPSJMYXllcl81XzIxXyI+CgkJPGc+CgkJCTxwYXRoIGQ9Ik0zNDEuNjY4LDMxNC40MTJjMCwwLTQxLjA3MS03MC41ODgtNDguNDM4LTgzLjI0OGM4LjM4Mi0yLjU1NywxNy4zMTEtNC44MTUsMjEuMDIxLTExLjIyMSAgICAgYzYuMTgzLTEwLjY3NC00LjgyMy0yOC4xODQtMS45MzMtMzkuNjI1YzIuOTc3LTExLjc3NSwyMC41NTEtMjEuOTY0LDIwLjU1MS0zMy45MzNjMC0xMS42NjEtMTguMTY5LTI1LjI4NC0yMS4xNDgtMzYuOTkgICAgIGMtMi45MS0xMS40MzksOC4wNjMtMjguOTY4LDEuODYtMzkuNjI5Yy02LjIwMy0xMC42NjItMjYuODY0LTkuNzg2LTM1LjM2OS0xNy45N2MtOC43NTEtOC40MjItOC43MjQtMjkuMDI4LTE5LjI3OS0zNC42NzIgICAgIGMtMTAuNTk4LTUuNjY1LTI3LjgyMiw1Ljc4NC0zOS41ODksMy4wNzJDMjA3LjcxMSwxNy41MTUsMTk3LjMxOCwwLDE4NS4xNjcsMGMtMTIuMzMxLDAtMzEuOTQ0LDE5Ljg2OC0zNS4wMiwyMC41ODMgICAgIGMtMTEuNzYxLDIuNzM0LTI5LjAwNy04LjY4Ny0zOS41OTQtMi45OThjLTEwLjU0NSw1LjY2My0xMC40OCwyNi4yNzEtMTkuMjE1LDM0LjcwN2MtOC40OTEsOC4xOTktMjkuMTUzLDcuMzYxLTM1LjMzNywxOC4wMzUgICAgIGMtNi4xODMsMTAuNjcyLDQuODIzLDI4LjE3OCwxLjkzNCwzOS42MjVjLTIuODk3LDExLjQ3Ni0yMS4wODMsMjMuMTA0LTIxLjA4MywzNi4zNzZjMCwxMS45NywxNy42MTgsMjIuMTI3LDIwLjYxMywzMy44OTYgICAgIGMyLjkxMSwxMS40MzktOC4wNjIsMjguOTY2LTEuODU5LDM5LjYzMWMzLjM3Nyw1LjgwNSwxMS4wMzksOC4xODgsMTguNjkxLDEwLjQ3OWMwLjg5MywwLjI2NywyLjU4MiwxLjI2NiwxLjQzOCwyLjkzMyAgICAgYy01LjIzNSw5LjAzNi00Ny4zNyw4MS43NTUtNDcuMzcsODEuNzU1Yy0zLjM1Miw1Ljc4NC0wLjYzLDEwLjc0Miw2LjA0NywxMS4wMjNsMzIuNjgzLDEuMzYzICAgICBjNi42NzcsMC4yODEsMTUuMDUzLDUuMTMzLDE4LjYxNywxMC43ODZsMTcuNDQsMjcuNjc0YzMuNTY0LDUuNjUzLDkuMjE5LDUuNTQ3LDEyLjU3LTAuMjM2YzAsMCw0OC43OTctODQuMjQ2LDQ4LjgxNy04NC4yNyAgICAgYzAuOTc5LTEuMTQ0LDEuOTYzLTAuOTA5LDIuNDM0LTAuNTA5YzUuMzM5LDQuNTQ2LDEyLjc4Miw5LjA4MSwxOC45OTQsOS4wODFjNi4wOTIsMCwxMS43MzMtNC4yNjksMTcuMzEzLTkuMDMgICAgIGMwLjQ1NC0wLjM4NywxLjU1OS0xLjE4LDIuMzY3LDAuNDY2YzAuMDEzLDAuMDI2LDQ4Ljc1Niw4My44MTEsNDguNzU2LDgzLjgxMWMzLjM2LDUuNzc2LDkuMDE2LDUuODc0LDEyLjU2OSwwLjIxNCAgICAgbDE3LjM5MS0yNy43MDdjMy41NTQtNS42NTcsMTEuOTIxLTEwLjUyOCwxOC41OTgtMTAuODE5bDMyLjY4LTEuNDI0QzM0Mi4zMTUsMzI1LjE1MiwzNDUuMDI4LDMyMC4xODcsMzQxLjY2OCwzMTQuNDEyeiAgICAgIE0yMzkuMTgsMjM4LjYzMWMtMzYuMTM2LDIxLjAyMy03OS41MTEsMTguNzctMTEyLjY0MS0yLjEyN2MtNDguNTQ1LTMxLjA5NS02NC41MTgtOTUuNDE5LTM1LjMzNS0xNDUuNzg4ICAgICBjMjkuNTE2LTUwLjk1LDk0LjM5OS02OC45MjgsMTQ1LjgwOC00MC45MjljMC4yNywwLjE0NywwLjUzNywwLjI5OSwwLjgwNSwwLjQ0OWMwLjM4MSwwLjIxMSwwLjc2MSwwLjQyNSwxLjE0LDAuNjQxICAgICBjMTUuODYsOS4xNDQsMjkuNjEzLDIyLjQxNSwzOS40NjEsMzkuMzQyQzMwOC41MTYsMTQxLjk1NSwyOTAuOTE1LDIwOC41MzMsMjM5LjE4LDIzOC42MzF6IiBmaWxsPSIjMDAwMDAwIi8+CgkJCTxwYXRoIGQ9Ik0yMzAuOTE2LDY2LjEwM2MtMC4xNS0wLjA4Ny0wLjMwMi0wLjE2OC0wLjQ1Mi0wLjI1NEMyMDMuMDAyLDQ5Ljk1NSwxNjgsNDguNzkzLDEzOC42NjUsNjUuODYgICAgIGMtNDMuNTMyLDI1LjMyNi01OC4zNDUsODEuMzQ1LTMzLjAxOSwxMjQuODc2YzcuNzI4LDEzLjI4NCwxOC4zMTgsMjMuODg4LDMwLjUzNiwzMS40OThjMS4wMzksMC42NTgsMi4wOSwxLjMwNSwzLjE2NCwxLjkyNyAgICAgYzQzLjU3OSwyNS4yNDcsOTkuNTY4LDEwLjMzMywxMjQuODE0LTMzLjI0NEMyODkuNDA1LDE0Ny4zMzgsMjc0LjQ5NSw5MS4zNSwyMzAuOTE2LDY2LjEwM3ogTTI0MS44MTgsMTM3LjM0NGwtMTUuMjU5LDE0Ljg3MyAgICAgYy00LjcyNiw0LjYwNi03LjY4LDEzLjY5OC02LjU2MywyMC4yMDNsMy42MDIsMjEuMDAxYzEuMTE2LDYuNTA1LTIuNzUsOS4zMTQtOC41OTIsNi4yNDNsLTE4Ljg2MS05LjkxNiAgICAgYy01Ljg0Mi0zLjA3MS0xNS40MDEtMy4wNzEtMjEuMjQzLDBsLTE4Ljg2LDkuOTE2Yy01Ljg0MiwzLjA3MS05LjcwOSwwLjI2Mi04LjU5My02LjI0M2wzLjYwMi0yMS4wMDEgICAgIGMxLjExNi02LjUwNS0xLjgzOC0xNS41OTctNi41NjQtMjAuMjAzbC0xNS4yNTgtMTQuODczYy00LjcyNy00LjYwNi0zLjI0OS05LjE1MiwzLjI4Mi0xMC4xMDJsMjEuMDg2LTMuMDY0ICAgICBjNi41MzEtMC45NDksMTQuMjY1LTYuNTY4LDE3LjE4Ni0xMi40ODZsOS40My0xOS4xMDdjMi45MjEtNS45MTgsNy43MDEtNS45MTgsMTAuNjIxLDBsOS40MzEsMTkuMTA3ICAgICBjMi45MjEsNS45MTgsMTAuNjU0LDExLjUzNywxNy4xODYsMTIuNDg2bDIxLjA4NiwzLjA2NEMyNDUuMDY3LDEyOC4xOTIsMjQ2LjU0NCwxMzIuNzM4LDI0MS44MTgsMTM3LjM0NHoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
)

export default PointSymbol