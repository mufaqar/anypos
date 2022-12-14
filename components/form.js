import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { BiBuilding } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { TiWorld } from "react-icons/ti";
import { FaRegSun } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);
  const [step6, setStep6] = useState(false);
  const [step7, setStep7] = useState(false);
  const [step8, setStep8] = useState(false);
  const [step9, setStep9] = useState(false);
  const [step10, setStep10] = useState(false);

  const [progress, setProgress] = useState("11%");
  const [messageTransfer, setMessageTransfer] = useState(false);
  const [loading, setLoding] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const [showmailField, setShowMailField] = useState(false);

  const [formFiels, setFormField] = useState({
    firstName: "",
    phone: "",
    email: "",
    company_name: "",
    businessActivity: "",
    city: "",
    selectfollowing: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormField({ ...formFiels, [name]: value });
  };

  const handleStepOneNext = () => {
    if (formFiels.firstName === "") {
      alert("Your Name is Missing");
      // setFormPopup(false);
    } else {
      setStep1(false);
      setStep2(true);
      setProgress("20%");
    }
  };
  const handleStepTwoPrevious = () => {
    setStep1(true);
    setStep2(false);
    setProgress("10%");
  };

  const handleStepTwoNext = () => {
    if (formFiels.phone === "") {
      alert("Your Phone is Missing");
    } else {
      setStep3(true);
      setStep2(false);
      setProgress("30%");
    }
  };

  const handleStepThreePrevious = () => {
    setStep3(false);
    setStep2(true);
    setProgress("20%");
  };

  const handleStepThreeNext = () => {
    if (formFiels.email === "") {
      alert("Your Email is Missing");
    } else {
      setStep3(false);
      setStep4(true);
      setProgress("40%");
    }
  };

  const handleStepFourPrevious = () => {
    setStep3(true);
    setStep4(false);
    setProgress("30%");
  };

  const handleStepFourNext = () => {
    if (formFiels.company_name === "") {
      alert("Your Data is Missing");
    } else {
      setStep4(false);
      setStep5(true);
      setProgress("50%");
    }
  };

  const handleStepFivePrevious = () => {
    setStep4(true);
    setStep5(false);
    setProgress("40%");
  };

  const handleStepFiveNext = () => {
    if (formFiels.businessActivity === "") {
      alert("business Activity is Missing");
    } else {
      setStep5(false);
      setStep6(true);
      setProgress("60%");
    }
  };

  const handleStepSixPrevious = () => {
    setStep5(true);
    setStep6(false);
    setProgress("50%");
  };

  const handleStepSixNext = () => {
    if (formFiels.city === "") {
      alert("City is Missing");
    } else {
      setStep7(true);
      setStep6(false);
      setProgress("70%");
    }
  };

  const handleStepSevenPrevious = () => {
    setStep6(true);
    setStep7(false);
    setProgress("60%");
  };

  const handleStepSevenNext = () => {
    if (formFiels.selectfollowing === "") {
      alert("Select Business");
    } else {
      setStep8(true);
      setStep7(false);
      setProgress("100%");
    }
  };
  

  const onSubmit = () => {
    setLoding(true);
    fetch("/api/sendmultistepform", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formFiels)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        alert("Message Successfully send.!")
        setLoding(false)
      }
    });
  };

  const nextWithoutMail = () => {
    setStep3(false);
    setStep4(true);
    setProgress("40%");
  };
  const nextWithMail = () => {
    setShowMailField(true);
  };

  return (
    <>
      {formStatus ? (
        "Message Send! "
      ) : loading ? (
        <h4 className="py-10 px-6">Message Sended</h4>
      ) : (
        <div className="lg:w-[760px] mx-auto w-full bg-white  p-[2%]">
          <div className="signup_form">
            <div className="p-2">
              <ul className="flex items-center justify-between mb-8 progressbar">
                <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                  <span
                    className={`p-2 mb-2 text-white rounded-full ${
                      step1 ? "bg-[#8DC63F]" : "bg-gray-200"
                    }`}
                  >
                    <FaUserAlt />
                  </span>
                  1
                </li>
                <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                  <span
                    className={`p-2 mb-2 text-white rounded-full ${
                      step2 ? "bg-[#8DC63F]" : "bg-gray-200"
                    }`}
                  >
                    <BsFillTelephoneFill />
                  </span>
                  2
                </li>
                <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                  <span
                    className={`p-2 mb-2 text-white rounded-full ${
                      step3 ? "bg-[#8DC63F]" : "bg-gray-200"
                    }`}
                  >
                    <FaEnvelope />
                  </span>
                  3
                </li>
                <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                  <span
                    className={`p-2 mb-2 text-white rounded-full ${
                      step4 ? "bg-[#8DC63F]" : "bg-gray-200"
                    }`}
                  >
                    <BiBuilding />
                  </span>
                  4
                </li>
                <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                  <span
                    className={`p-2 mb-2 text-white rounded-full ${
                      step5 ? "bg-[#8DC63F]" : "bg-gray-200"
                    }`}
                  >
                    <MdLocationOn />
                  </span>
                  5
                </li>
                <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                  <span
                    className={`p-2 mb-2 text-white rounded-full ${
                      step6 ? "bg-[#8DC63F]" : "bg-gray-200"
                    }`}
                  >
                    <TiWorld />
                  </span>
                  6
                </li>
                <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                  <span
                    className={`p-2 mb-2 text-white rounded-full ${
                      step7 ? "bg-[#8DC63F]" : "bg-gray-200"
                    }`}
                  >
                    <FaRegSun />
                  </span>
                  7
                </li>
                <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                  <span
                    className={`p-2 mb-2 text-white rounded-full ${
                      step8 ? "bg-[#8DC63F]" : "bg-gray-200"
                    }`}
                  >
                  <BsCheckLg />
                  </span>
                  8
                </li>

              </ul>

              {/* progress bar  */}
              <div className="w-full h-6 rounded-[4px] bg-slate-200">
                <div
                  className={`flex rounded-[4px] justify-end h-6 bg-[#8DC63F] transition-all duration-500 progressBar`}
                  style={{ width: progress }}
                >
                  <p className="mr-2 text-white">{progress}</p>
                </div>
              </div>

              <form onSubmit={onSubmit}>
                {/* step 1 */}
                <div id="fieldset1" className={step1 ? "block" : "hidden"}>
                  <div className="grid mb-8 form-group">
                    <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter Your Name here"
                      value={formFiels.firstName}
                      onChange={handleChange}
                      className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                      required
                    ></input>
                  </div>
                  <div className="flex justify-end space-x-1">
                    <a
                      onClick={handleStepOneNext}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Next
                    </a>
                  </div>
                </div>
                {/* step 2 */}
                <div id="fieldset2" className={step2 ? "block" : "hidden"}>
                  <div className="grid mb-8 form-group">
                    <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                      HI {formFiels.firstName} whats your Phone Number
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Enter Your Phone ! "
                      value={formFiels.phone}
                      onChange={handleChange}
                      className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                    ></input>
                  </div>
                  <div className="flex justify-end space-x-1">
                    <a
                      onClick={handleStepTwoPrevious}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Previous
                    </a>
                    <a
                      onClick={handleStepTwoNext}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Next
                    </a>
                  </div>
                </div>
                {/* step 3 */}
                <div id="fieldset3" className={step3 ? "block" : "hidden"}>
                  <div className="grid mb-8 form-group">
                    <div
                      className={`mt-4 ${showmailField ? "hidden" : "block"}`}
                    >
                      <h1
                        className={`text-[#302E2E] text-2xl font-semibold py-5 uppercase `}
                      >
                        Do you have a email?
                      </h1>

                      <a
                        onClick={nextWithoutMail}
                        className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white px-10 py-3 w-24 items-center"
                      >
                        No
                      </a>
                      <a
                        onClick={nextWithMail}
                        className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold px-10 ml-2 text-white py-3 w-24 items-center"
                      >
                        Yes
                      </a>
                    </div>
                    {showmailField && (
                      <>
                        <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                          And your Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formFiels.email}
                          onChange={handleChange}
                          placeholder="Please enter your Email address"
                          className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                        ></input>
                      </>
                    )}
                  </div>
                  <div className="flex justify-end space-x-1">
                    <a
                      onClick={handleStepThreePrevious}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Previous
                    </a>
                    <a
                      onClick={handleStepThreeNext}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Next
                    </a>
                  </div>
                </div>
                {/* step 4 */}
                <div id="fieldset4" className={step4 ? "block" : "hidden"}>
                  <div className="grid mb-8 form-group">
                    <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      placeholder="Company "
                      value={formFiels.company_name}
                      onChange={handleChange}
                      className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                    ></input>
                  </div>
                  <div className="flex justify-end space-x-1">
                    <a
                      onClick={handleStepFourPrevious}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Previous
                    </a>
                    <a
                      onClick={handleStepFourNext}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Next
                    </a>
                  </div>
                </div>
                {/* step 5 */}
                <div id="fieldset5" className={step5 ? "block" : "hidden"}>
                  <div className="justify-between mt-8">
                    <label className="text-[#302E2E] text-2xl  font-semibold py-5 uppercase">
                      Please tell us about your business activity
                    </label>
                    <textarea
                      rows="8"
                      type="text"
                      id="city"
                      name="businessActivity"
                      placeholder=" "
                      value={formFiels.businessActivity}
                      onChange={handleChange}
                      className="py-2 px-4 w-full border border-[#ccc] mt-4 focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                    ></textarea>
                  </div>

                  <div className="flex justify-end mt-6 space-x-1">
                    <a
                      onClick={handleStepFivePrevious}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Previous
                    </a>
                    <a
                      onClick={handleStepFiveNext}
                      className="bg-[#8DC63F] text-center hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Next
                    </a>
                  </div>
                </div>
                {/* step 6 */}
                <div id="fieldset6" className={step6 ? "block" : "hidden"}>
                  <div className="grid mb-8 form-group">
                    <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter Your city! "
                      value={formFiels.city}
                      onChange={handleChange}
                      className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                    ></input>
                  </div>
                  <div className="flex justify-end space-x-1">
                    <a
                      onClick={handleStepSixPrevious}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Previous
                    </a>
                    <a
                      onClick={handleStepSixNext}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Next
                    </a>
                  </div>
                </div>
                {/* step 7 */}
                <div id="fieldset7" className={step7 ? "block" : "hidden"}>
                  <div className="grid mb-8 form-group">
                    <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                      Please select the following:
                    </label>
                    <ul>
                      <li>
                        <input
                          type="radio"
                          onChange={handleChange}
                          id="full_erp"
                          name="selectfollowing"
                          value="I need only POS app for mobile or tablet"
                        ></input>
                        <label
                          htmlFor="full_erp"
                          className="text-base font-medium"
                        >
                          I need only POS app for mobile or tablet
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          onChange={handleChange}
                          id="hrm_and_payroll"
                          name="selectfollowing"
                          value="I already have old POS need software only"
                        ></input>
                        <label
                          htmlFor="hrm_and_payroll"
                          className="text-base font-medium"
                        >
                          I already have old POS need software only
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          onChange={handleChange}
                          id="finance_and_accounting"
                          name="selectfollowing"
                          value="I have multiple branches so i need enterprise version"
                        ></input>
                        <label
                          htmlFor="finance_and_accounting"
                          className="text-base font-medium"
                        >
                          I have multiple branches so i need enterprise version
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-end space-x-1">
                    <a
                      onClick={handleStepSevenPrevious}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Previous
                    </a>
                    <a
                      onClick={handleStepSevenNext}
                      className="text-center bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                    >
                      Next
                    </a>
                  </div>
                </div>
                {/* step 8 */}
                <div id="fieldset8" className={step8 ? "block" : "hidden"}>
                  <div className="grid mb-8 form-group">
                    <input type="hidden" id="p_fname" name="fname"></input>
                    <input type="hidden" id="p_phone" name="phone"></input>
                    <input type="hidden" id="p_email" name="email"></input>
                    <input
                      type="hidden"
                      id="p_company_name"
                      name="company_name"
                    ></input>
                    <input type="hidden" id="p_website" name="website"></input>
                    <input type="hidden" id="p_city" name="city"></input>
                    <input type="hidden" id="p_country" name="country"></input>
                    <input
                      type="hidden"
                      id="p_industryselect"
                      name="industryselect"
                    ></input>
                    <input
                      type="hidden"
                      id="p_selectfollowing"
                      name="selectfollowing"
                    ></input>
                    <input type="hidden" id="p_users" name="users"></input>
                    <input
                      type="hidden"
                      id="p_erpsystem"
                      name="erpsystem"
                    ></input>
                    <input type="hidden" id="p_speak" name="speak"></input>
                    <input type="hidden" id="p_team" name="team"></input>
                    <h2 className="text-[#302E2E] text-3xl font-semibold py-5">
                      You Want to submit this form with this data ?
                    </h2>
                    <ul>
                      <li>
                        Your Name : <span>{formFiels.firstName}</span>
                      </li>
                      <li>
                        Your Number : <span>{formFiels.phone}</span>
                      </li>
                      <li>
                        Email : <span>{formFiels.email}</span>
                      </li>
                      <li>
                        Company Name : <span>{formFiels.company_name}</span>
                      </li>
                      <li>
                        Business Activity : <span>{formFiels.businessActivity}</span>
                      </li>
                      <li>
                        City : <span>{formFiels.city}</span>
                      </li>
                      <li>
                        Please select the following: : <span>{formFiels.selectfollowing}</span>
                      </li>
                     
                    </ul>
                  </div>
                  <div className="">
                    <input
                      type="submit"
                      className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                      value="Submit"
                    ></input>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
