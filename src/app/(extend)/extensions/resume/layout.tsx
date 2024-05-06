import Script from 'next/script'
export default function ResumeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
            {children}
        </>
    );
}
