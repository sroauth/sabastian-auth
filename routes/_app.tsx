import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Sabastian Auth</title>

        <link rel="stylesheet" href="/styles.css" />
      </head>

      <body>
        <nav>
          <ul>
            <li>
              <a href="/">
                <span class="emoji">🏠</span>Home
              </a>
            </li>
            <li>
              <a href="/blog">
                <span class="emoji">📝</span>Blog
              </a>
            </li>
            <li>
              <a href="/tattoos">
                <span class="emoji">🖊️</span>Tattoos
              </a>
            </li>
            <li>
              <a href="/art">
                <span class="emoji">🎨</span>Art
              </a>
            </li>
            <li>
              <a href="/music">
                <span class="emoji">💿</span>Music
              </a>
            </li>
            <li>
              <a href="/movies">
                <span class="emoji">🍿</span>Movies
              </a>
            </li>
          </ul>
        </nav>

        <Component />
      </body>
    </html>
  );
}
