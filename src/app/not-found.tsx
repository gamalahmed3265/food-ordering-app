const NotfoundPage = () => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Not Found</title>
        <style></style>
      </head>
      <body
        className={`h-screen flex justify-center items-center`}
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="shadow rounded bg-slate-950">
          <h2
            className="text-9xl font-extrabold"
            style={{
              fontSize: "50px",
              fontFamily: "monospace",
            }}
          >
            غير موجود
          </h2>
        </div>
      </body>
    </html>
  );
};

export default NotfoundPage;
