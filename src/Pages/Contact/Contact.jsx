import React from "react";
import Container from "../../Components/Shared/Container";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleMessage = (data) => {
    // console.log(data);
    if (!data.name || !data.message || !data.email) {
      toast.error("Your message is not completed");
      return;
    } else {
      toast.success("Message send successfully");
    }
  };
  return (
    <div>
      <Container>
        <div className="md:grid grid-cols-2 p-4 space-y-10 min-h-screen content-center items-center">
          <div>
            <div className="space-y-3 md:space-y-10">
              <div className="flex bg-gray-200 p-2 rounded-2xl items-center gap-3">
                <div>
                  <FaPhone size={25} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold ">Phone</h3>
                  <p>+8801610990018</p>
                </div>
              </div>

              <div className="flex bg-gray-200 p-2 rounded-2xl items-center gap-3">
                <div>
                  <MdEmail size={30} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold ">Email</h3>
                  <p>asifzehendmg@gmail.com</p>
                </div>
              </div>

              <div className="flex bg-gray-200 p-2 rounded-2xl items-center gap-3">
                <div>
                  <FaLocationPin size={30} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold ">Location</h3>
                  <p>Chattogram, Feni</p>
                </div>
              </div>

              <div></div>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center ">
              <div className="card bg-purple-300 py-5 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-4xl font-bold text-center text-secondary">
                  Send Message
                </h1>
                <form
                  onSubmit={handleSubmit(handleMessage)}
                  className="card-body "
                >
                  <fieldset className="fieldset">
                    <label className="label">Your Name</label>
                    <input
                      type="text"
                      {...register("name", {
                        required: { value: true, message: "Name is required" },
                      })}
                      className="input outline-0  "
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-600">{errors.name.message}</p>
                    )}

                    <label className="label">Email</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: { value: true, message: "Email is required" },
                      })}
                      className="input outline-0 "
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email.message}</p>
                    )}

                    <label className="label"></label>
                    <textarea
                      {...register("message", {
                        required: {
                          value: true,
                          message: "Message Is required",
                        },
                      })}
                      className="textarea outline-0"
                      placeholder="Your Message"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-600">{errors.message.message}</p>
                    )}

                    <button className="btn btn-secondary mt-4 ">
                      Send Message
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
