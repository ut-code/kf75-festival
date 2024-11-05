default: start

start:
    bun start

watch:
    echo "Unknown command"
    exit 1

build:
    bun run build

serve:
    bun run serve
