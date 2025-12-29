import LayoutWrapper from "@/Components/Utils/LayoutWrapper";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>     
      </body>
    </html>
  );
}
