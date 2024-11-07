import { Button } from "@mui/material";
import { BiArrowToRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { lawFirmAboutProfile } from "../components/about/lawFirmAboutProfile";

export function Abouts() {
  const { issuesWeResolve, methodsWeUse, strengths } = lawFirmAboutProfile;

  return (
    <>
      <section className="flex flex-col gap-5 items-center justify-start py-20 box-border bg-black/5 mb-10">
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
          }
        >
          <h2 className="text-xl min-[498px]:text-2xl sm:text-3xl">
            Trusted Expertise
          </h2>
          <h2 className="text-3xl min-[498px]:text-4xl sm:text-5xl">
            Legal Precision
          </h2>
        </div>
        <p className="text-center text-base min-[498px]:text-lg sm:text-xl w-full max-w-screen-lg px-10 text-pretty">
          GeraldLaw is a trusted legal firm, recognized for its expertise across
          multiple practice areas, including corporate, family, criminal, real
          estate, and intellectual property law. Known for a client-centered
          approach, GeraldLaw provides effective legal solutions tailored to
          individual client needs, whether by skillful negotiation outside the
          courtroom or rigorous representation within it. With a dedicated team
          of experienced professionals, GeraldLaw ensures every case is handled
          with precision, transparency, and empathy, empowering clients to
          navigate their legal challenges confidently and securely.
        </p>
        <Link to={"/contact"} state={{ section: "form" }}>
          <Button
            variant="outlined"
            className="!py-4 !text-base min-[498px]:!text-lg sm:!text-xl font-mono !px-4 !border-black/90 hover:!bg-black/10 !text-black capitalize"
            disableElevation
          >
            Book Consultation
          </Button>
        </Link>
      </section>
      <section className="flex flex-col gap-5 items-center justify-center box-border pb-10">
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
          }
        >
          <h2 className="text-xl min-[498px]:text-2xl sm:text-3xl">
            About Our
          </h2>
          <h2 className="text-3xl min-[498px]:text-4xl sm:text-5xl">
            Law Firm
          </h2>
        </div>
        <ul className="w-full max-w-screen-md isolate px-2 flex flex-wrap gap-5 items-start justify-start box-border">
          <li className="w-full relative min-[498px]:w-1/2 flex flex-grow basis-[200px] flex-col items-start justify-start gap-2">
            <h4
              className={
                "text-lg min-[498px]:text-xl sm:text-2xl font-bold after:w-10 relative flex items-start justify-start gap-2 flex-col " +
                "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
              }
            >
              Methods we use
            </h4>
            <ul className="w-full h-fit py-2 box-border flex flex-col items-start justify-start gap-2">
              {methodsWeUse.slice(0, 3).map((method, ind) => (
                <li
                  key={ind}
                  className="w-full h-fit bg-black/5 flex flex-col items-start justify-start gap-2 box-border p-2 shadow-sm border-[1px] border-black/50 rounded-md"
                >
                  <h4
                    className={
                      "text-base min-[498px]:text-lg sm:text-xl font-mono after:w-10 relative flex items-start justify-start gap-2 flex-col " +
                      "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500/50 after:rounded-full"
                    }
                  >
                    {method.method}
                  </h4>
                  <p>{method.description.split(".")[0]}</p>
                  <Link
                    to="/practices"
                    state={{ id: method.method.replace(/ /g, "-") }}
                    className="w-fit h-fit"
                  >
                    <Button
                      variant="contained"
                      className="!p-2 !text-xs min-[498px]:!text-sm sm:!text-base font-mono !px-4 !bg-black/90 hover:!bg-black/70 !text-white"
                      startIcon={<BiArrowToRight />}
                      disableElevation
                    >
                      Read more
                    </Button>
                  </Link>
                </li>
              ))}
              <li
                className={
                  "w-full min-[498px]:hidden relative z-10 flex items-center justify-center bg-gradient-to-t from-white to-transparent"
                }
              >
                <Link
                  to="/practices"
                  state={{ id: "methodsContainer" }}
                  className="w-fit h-fit"
                >
                  <Button
                    variant="text"
                    className="!p-2 !text-xs min-[498px]:!text-sm sm:!text-base !px-4  !text-black"
                    startIcon={<BsArrowRight />}
                    disableElevation
                  >
                    See all methods
                  </Button>
                </Link>
              </li>
            </ul>
          </li>
          <li className="w-full relative min-[498px]:w-1/2 flex flex-grow basis-[200px] flex-col items-start justify-start gap-2">
            <h4
              className={
                "text-lg min-[498px]:text-xl sm:text-2xl font-bold after:w-10 relative flex items-start justify-start gap-2 flex-col " +
                "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
              }
            >
              Issues We Resolve
            </h4>
            <ul className="w-full h-fit py-2 box-border flex flex-col items-start justify-start gap-2">
              {issuesWeResolve.slice(0, 3).map((issue, ind) => (
                <li
                  key={ind}
                  className="w-full h-fit bg-black/5 flex flex-col items-start justify-start gap-2 box-border p-2 shadow-sm border-[1px] border-black/50 rounded-md"
                >
                  <h4
                    className={
                      "text-base min-[498px]:text-lg sm:text-xl font-mono after:w-10 relative flex items-start justify-start gap-2 flex-col " +
                      "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500/50 after:rounded-full"
                    }
                  >
                    {issue.issue}
                  </h4>
                  <p>{issue.description.split(".")[0]}</p>
                  <Link
                    to="/practices"
                    state={{ id: issue.issue.replace(/ /g, "-") }}
                    className="w-fit h-fit"
                  >
                    <Button
                      variant="contained"
                      className="!p-2 !text-xs min-[498px]:!text-sm font-mono sm:!text-base !px-4 !bg-black/90 hover:!bg-black/70 !text-white"
                      startIcon={<BiArrowToRight />}
                      disableElevation
                    >
                      Read more
                    </Button>
                  </Link>
                </li>
              ))}
              <li
                className={
                  "w-full min-[498px]:hidden relative z-10 flex items-center justify-center bg-gradient-to-t from-white to-transparent"
                }
              >
                <Link
                  to="/practices"
                  state={{ id: "issuesContainer" }}
                  className="w-fit h-fit"
                >
                  <Button
                    variant="text"
                    className="!p-2 !text-xs min-[498px]:!text-sm sm:!text-base !px-4 font-mono !text-black"
                    startIcon={<BsArrowRight />}
                    disableElevation
                  >
                    See all Issues
                  </Button>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={
              "w-full hidden min-[498px]:flex relative z-10 items-center justify-center bg-gradient-to-t from-white to-transparent"
            }
          >
            <Link to="/practices" state={{ id: "/" }} className="w-fit h-fit">
              <Button
                variant="text"
                className="!p-2 !text-xs min-[498px]:!text-sm sm:!text-base font-mono !px-4  !text-black"
                startIcon={<BsArrowRight />}
                disableElevation
              >
                See all expertise
              </Button>
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-5 items-center justify-center box-border pb-10">
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
          }
        >
          <h2 className="text-xl min-[498px]:text-2xl sm:text-3xl">
            Why Clients Like Us
          </h2>
        </div>
        <ul className="w-full max-w-screen-md isolate px-2 flex flex-wrap gap-5 items-start justify-start box-border">
          {strengths.map((str, ind) => (
            <li
              key={ind}
              className="w-full min-[320px]:w-1/2 h-fit bg-black/5 flex flex-grow basis-[200px] flex-col items-start justify-start gap-2 box-border p-2 shadow-sm border-[1px] border-black/50 rounded-md"
            >
              <h4
                className={
                  "text-base min-[498px]:text-lg sm:text-xl font-mono after:w-10 relative flex items-start justify-start gap-2 flex-col " +
                  "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500/50 after:rounded-full"
                }
              >
                {str.category}
              </h4>
              <p>{str.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-5 items-center justify-center box-border bg-black/5 py-10">
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
          }
        >
          <h2 className="text-xl min-[498px]:text-2xl sm:text-3xl">
            Need a Lawyer?
          </h2>
        </div>
        <div className="w-full flex items-center justify-center gap-2 flex-wrap">
          <Link to={"/team"}>
            <Button
              variant="outlined"
              className="!py-4 !text-base min-[498px]:!text-lg sm:!text-xl font-mono !px-4 !border-black/90 hover:!bg-black/10 !text-black capitalize"
              disableElevation
            >
              View Profiles
            </Button>
          </Link>

          <Link to={"/contact"} state={{ section: "form" }}>
            <Button
              variant="contained"
              className="!py-4 !text-base min-[498px]:!text-lg sm:!text-xl font-mono !px-4 !bg-black/90 hover:!bg-black/70 !text-white capitalize"
              disableElevation
            >
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
