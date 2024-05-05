export default function Page() {
    return (
        <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-3 p-4">
            <div className="flex flex-wrap justify-center items-start">
                <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="vu-van-thuan-002839224" data-version="v1"></div>
            </div>
            <iframe
                className="col-span-1 md:col-span-2"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDNtrwINE&#x2F;4vGz5myNp5aCd0AQstZ7Ow&#x2F;view?embed"
                frameBorder="0"
                allowFullScreen
                allow="fullscreen"
                style={{
                    overflow: "hidden",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 10
                }}
            ></iframe>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
        </div>
    );
}
