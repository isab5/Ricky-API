import "../styles/globals.css";

export const metadata = {
  title: "Rick and Morty App",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
);
}