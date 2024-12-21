import { title } from "process";

export const metadata = {
    title: "BHR official",
    description: "BHR official website",
} 

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {  
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}