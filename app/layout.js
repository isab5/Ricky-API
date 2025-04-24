import "../styles/globals.css";

export const metadata = {
  title: "API Rick and Morty App",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="./bethsmithicon.png" />
      </head>
      <body>{children}</body>
    </html>
);
}