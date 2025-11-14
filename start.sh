#!/bin/bash

echo "🚀 Starting Ciphera..."
echo ""
echo "Frontend will be available at: http://localhost:5173"
echo "Backend API will be available at: http://localhost:3001"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

trap 'kill $(jobs -p)' EXIT

npm run dev &
npm run dev:server &

wait
