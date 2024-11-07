import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import { IoMailOpen } from "react-icons/io5";
import { MdCall, MdSend } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { daysOfWeek, getDateFromNow, moment } from "../utils/dateFromNow";

interface workDays {
  day: string;
}
interface availability {
  isWeekday?: boolean;
  isWithinTime?: boolean;
}
const responseFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  textContent: z.string().min(10, "Message must be at least 10 words"),
  permission: z.boolean().refine((val) => val === true, {
    message: "Permission must be accepted",
  }),
});
type responseFormData = z.infer<typeof responseFormSchema>;

export function Contact() {
  const [workDays, setWorkDays] = useState<workDays[]>([]);
  const [isWorkingNow, setIsWorkingNow] = useState<availability>({});
  const responseForm = useRef<HTMLElement | null>(null);
  const location = useLocation();
  const { section } = location.state || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<responseFormData>({
    resolver: zodResolver(responseFormSchema),
  });

  const onSubmit: SubmitHandler<responseFormData> = (data) => {
    const { email, name, textContent } = data;

    const subject = `Message from ${name}`;
    const body = `
Name: ${name}
Response email: ${email}

Message:
${textContent}
    `;
    const mailtoLink = `mailto:Geraldconsultant@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const days = Array.from({ length: 7 }, (_, index) => ({
      day: daysOfWeek[getDateFromNow(index).getUTCDay()],
    }));

    setWorkDays(days);
  }, []);

  const scrollToResponseForm = useCallback(() => {
    responseForm.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);
  useEffect(() => {
    if (section == "form") {
      scrollToResponseForm();
    }
  }, [scrollToResponseForm, section]);

  useEffect(() => {
    const tomorrow = {
      day: daysOfWeek[getDateFromNow().getUTCDay()],
    };

    if (workDays.length > 0) {
      if (
        workDays[0].day.slice(0, 3).toLowerCase() !== "sat" &&
        workDays[0].day.slice(0, 3).toLowerCase() !== "sun"
      ) {
        const hour = getDateFromNow(0).getUTCHours() + 1;

        if (hour >= 7 && hour < 18) {
          setIsWorkingNow({ isWeekday: true, isWithinTime: true });
        } else if (tomorrow.day.slice(0, 3).toLowerCase() === "sat") {
          setIsWorkingNow({ isWeekday: false, isWithinTime: false });
        } else {
          setIsWorkingNow({ isWeekday: true, isWithinTime: false });
        }
      } else {
        setIsWorkingNow({ isWeekday: false, isWithinTime: false });
      }
    }
  }, [workDays]);

  

  return (
    <>
      <section className="flex flex-col gap-5 items-center justify-center box-border pb-10">
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
          }
        >
          <h2 className="text-xl min-[498px]:text-2xl sm:text-3xl">
            Need help?
          </h2>
          <h2 className="text-3xl min-[498px]:text-4xl sm:text-5xl">
            Let's Talk
          </h2>
        </div>

        <ul className="w-full flex items-start justify-center gap-2 flex-wrap p-2">
          <li className="w-full p-5 flex items-start justify-start flex-col gap-4 min-[498px]:w-56 sm:w-72 lg:w-96 shadow-sm shadow-black/15 rounded-md">
            <h4
              className={
                "text-base min-[498px]:text-lg sm:text-xl after:w-10 relative flex items-start justify-start gap-2 flex-col " +
                "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
              }
            >
              Contact info
            </h4>

            <address className="text-sm min-[498px]:text-base sm:text-lg not-italic">
            James J. DeCristofaro, Esq.
462 Seventh Ave Fl 6
New York, NY 10018
            </address>

            <a href="tel:+12702902019" className="w-fit h-fit">
              <Button
                variant="contained"
                className="!p-2 !text-xs min-[498px]:!text-sm sm:!text-base !px-4 !bg-black/90 hover:!bg-black/70 !text-white"
                startIcon={<MdCall />}
                disableElevation
              >
                +(1) 270-290-2019
              </Button>
            </a>
          </li>
          <li className="w-full p-5 flex items-start justify-start flex-col gap-4 min-[498px]:w-56 sm:w-72 lg:w-96 shadow-sm shadow-black/15 rounded-md">
            <h4
              className={
                "text-base min-[498px]:text-lg sm:text-xl after:w-10 relative flex items-start justify-start gap-2 flex-col " +
                "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
              }
            >
              New clients
            </h4>
            <p className="text-sm min-[498px]:text-base sm:text-lg">
              Are you looking to speak with one of our family lawyers?
            </p>
            <Button
              variant="contained"
              className="!p-2 !text-xs min-[498px]:!text-sm sm:!text-base !px-4 !bg-black/90 hover:!bg-black/70 !text-white"
              startIcon={<IoMailOpen />}
              disableElevation
              onClick={scrollToResponseForm}
            >
              Send a mail
            </Button>
          </li>
        </ul>
        {
          <section className="w-full px-2 py-10 bg-black/10 text-center text-lg">
            <p>
              {isWorkingNow.isWeekday ? (
                !isWorkingNow.isWithinTime ? (
                  <>
                    Good {moment(getDateFromNow(0).getUTCHours() + 1)}, We are
                    currently not available{" "}
                    <span className="text-black/80 font-bold">
                      - come back tomorrow at 7am
                    </span>
                  </>
                ) : (
                  <>
                    <span className="flex flex-col gap-3 items-center justify-center font-bold text-2xl">
                      <BiCalendar className="text-5xl text-red-500" />
                      Office is open now
                      <span className="text-xl font-normal">
                        Closing in {18 - (getDateFromNow(0).getUTCHours() + 1)}
                        hour
                        {18 - (getDateFromNow(0).getUTCHours() + 1) > 1
                          ? "s"
                          : null}
                      </span>
                    </span>
                  </>
                )
              ) : (
                <>
                  Good {moment(getDateFromNow(0).getUTCHours() + 1)}, We are
                  currently not available until{" "}
                  <span className="text-black/80 font-bold">
                    - monday at 7am
                  </span>
                </>
              )}
            </p>
          </section>
        }
      </section>

      <section className="flex flex-col gap-5 items-center justify-center box-border pb-10">
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
          }
        >
          <h2 className="text-xl min-[498px]:text-2xl sm:text-3xl">
            Office Hours
          </h2>
        </div>

        <ul className="w-full max-w-screen-md flex first:*:border-t-[1.5px] *:border-b-[1.5px] flex-col items-start justify-center flex-wrap p-2">
          {workDays.map((workDay, index) => (
            <li
              key={index}
              className="w-full box-border px-2 py-5 flex items-center hover:duration-200 hover:bg-black/5 justify-between gap-2 flex-wrap text-base min-[498px]:text-lg sm:text-xl capitalize"
            >
              <strong>{index == 0 ? "Today" : `${workDay.day}`}</strong>
              <em className="not-italic">
                -{" "}
                {index == 0
                  ? workDay.day.slice(0, 3).toLowerCase() !== "sat" &&
                    workDay.day.slice(0, 3).toLowerCase() !== "sun" &&
                    isWorkingNow.isWithinTime
                    ? "Available 7am - 6pm"
                    : "Closed"
                  : workDay.day.slice(0, 3).toLowerCase() !== "sat" &&
                      workDay.day.slice(0, 3).toLowerCase() !== "sun"
                    ? "Available 7am - 6pm"
                    : "Closed"}
              </em>
            </li>
          ))}
        </ul>
      </section>
      <section
        ref={responseForm}
        className="w-full min-h-screen p-4 py-10 flex flex-col items-center justify-center gap-4 bg-black/10 text-center"
      >
        <div
          className={
            "w-full h-fit p-2 text-center relative flex items-center justify-center pb-[-10px] gap-2 flex-col *:font-medium " +
            "after:content-[''] after:relative after:w-10 after:h-0.5 after:bg-red-500 after:rounded-full"
          }
        >
          <h2 className="text-xl min-[498px]:text-2xl sm:text-3xl">
            Need Legal Advice?
          </h2>
          <h2 className="text-lg min-[498px]:text-xl sm:text-2xl">
            Book Consultation
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-screen-sm flex flex-wrap items-center justify-center gap-2"
        >
          <TextField
            className="w-full min-[498px]:w-[calc(50%-0.25rem)] focus:!border-black/80 !outline-none"
            label="Name"
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : " "}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: errors.name ? "red" : "rgba(0, 0, 0, 0.3)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: errors.name ? "red" : "rgba(0, 0, 0, 0.8)",
                  borderWidth: 1,
                },
              },
              "& .MuiOutlinedInput-input": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
              "& .MuiInputLabel-root": {
                color: errors.name ? "red" : "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: errors.name ? "red" : "black",
              },
            }}
            {...register("name")}
          />

          <TextField
            className="w-full min-[498px]:w-[calc(50%-0.25rem)] focus:!border-black/80 !outline-none"
            label="Response Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : " "}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: errors.email ? "red" : "rgba(0, 0, 0, 0.3)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: errors.email ? "red" : "rgba(0, 0, 0, 0.8)",
                  borderWidth: 1,
                },
              },
              "& .MuiOutlinedInput-input": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
              "& .MuiInputLabel-root": {
                color: errors.email ? "red" : "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: errors.email ? "red" : "black",
              },
            }}
            {...register("email")}
          />

          <textarea
            className={`w-full h-36 p-2 rounded-md border-[1px] bg-black/5 
    ${errors.textContent ? "border-red-500 hover:border-red-500" : "border-black/30 hover:border-black/80"} 
  focus:border-black/80 
    outline-none resize-none placeholder:text-black/50`}
            placeholder="How can we help you?"
            {...register("textContent")}
          />

          <div className="w-full flex flex-col items-start justify-start">
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                  {...register("permission", {
                    required: "You must give permission",
                  })}
                />
              }
              label={`You give us permission to respond to you by email provided`}
              sx={{
                "& .MuiFormControlLabel-label": {
                  color: errors.permission ? "red" : "black",
                  textAlign: "left",
                },
              }}
            />
            {errors.permission && (
              <p
                style={{
                  color: "red",
                  fontSize: "0.875rem",
                  marginTop: "0.25rem",
                }}
              >
                {errors.permission.message}
              </p>
            )}
          </div>

          <div className="w-full flex items-start justify-start">
            <Button
              variant="contained"
              className="w-full min-[498px]:w-fit !p-2 !px-4 !text-xs min-[498px]:!text-sm sm:!text-base !bg-black/90 hover:!bg-black/70 !text-white capitalize"
              startIcon={<MdSend />}
              disableElevation
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
