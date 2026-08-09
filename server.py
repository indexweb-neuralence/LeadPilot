import http.server
import socketserver
import os
import sys

PORT = 3000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent caching during development so changes reflect immediately
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def translate_path(self, path):
        # Ensure security: protect against directory traversal outside workspace
        translated = super().translate_path(path)
        rel = os.path.relpath(translated, os.getcwd())
        if rel.startswith("..") and not rel.startswith(os.path.join("..", "Lead Pilot")):
            print(f"Blocked unauthorized access to path: {path}")
            return os.path.join(os.getcwd(), "index.html")
        return translated

handler = CustomHTTPRequestHandler

# Adjust file types for CSS/JS just in case
handler.extensions_map.update({
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.html': 'text/html',
})

print(f"\n==================================================")
print(f"🚀 LeadPilot Landing Page Dev Server is starting...")
print(f"   Local URL: http://localhost:{PORT}")
print(f"==================================================\n")

try:
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nShutting down dev server.")
    sys.exit(0)
except Exception as e:
    print(f"Error starting server: {e}")
    sys.exit(1)
