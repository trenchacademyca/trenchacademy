import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Trench Academy by Recruit Ready — Trust the process.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [heroBuf, logoBuf, oswaldBuf] = await Promise.all([
    readFile(join(process.cwd(), "public/media/hero/hero-sean-sevillano.jpg")),
    readFile(join(process.cwd(), "public/logo.png")),
    readFile(join(process.cwd(), "src/app/fonts/Oswald-Bold.woff")),
  ]);

  const heroSrc = `data:image/jpeg;base64,${heroBuf.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logoBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#07090c",
          fontFamily: "Oswald",
        }}
      >
        {/* Hero photo background */}
        <img
          src={heroSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Solid base dimmer covering the full image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(7,9,12,0.55)",
            display: "flex",
          }}
        />

        {/* Left-to-right gradient — near-solid dark over the text area */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, rgba(7,9,12,0.95) 0%, rgba(7,9,12,0.85) 55%, rgba(7,9,12,0.4) 100%)",
            display: "flex",
          }}
        />

        {/* Bottom vignette to seat the headline */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 35%, rgba(7,9,12,0.5) 100%)",
            display: "flex",
          }}
        />

        {/* Content stack — vertically centered, left-aligned */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Logo + brand text row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
            }}
          >
            <img
              src={logoSrc}
              alt=""
              width={96}
              height={90}
              style={{ width: 96, height: 90 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  lineHeight: 1,
                }}
              >
                Trench Academy
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#017db9",
                  textTransform: "uppercase",
                  letterSpacing: 4,
                  lineHeight: 1,
                  marginTop: 6,
                }}
              >
                by Recruit Ready
              </div>
            </div>
          </div>

          {/* Big headline — stacked on two lines */}
          <div
            style={{
              marginTop: 60,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 136,
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: -1,
                lineHeight: 0.9,
              }}
            >
              Trust the
            </div>
            <div
              style={{
                fontSize: 136,
                fontWeight: 700,
                color: "#017db9",
                textTransform: "uppercase",
                letterSpacing: -1,
                lineHeight: 0.9,
              }}
            >
              process.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Oswald",
          data: oswaldBuf,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
