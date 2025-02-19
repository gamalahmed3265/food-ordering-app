import { Routes } from "@/app/constants/enums";
import MainHeading from "../main-heading/inde";

const Contact = async () => {
  return (
    <section className="section-gap" id={Routes.CONTACT}>
      <div className="container text-center">
        <MainHeading subTitle={"Don'tHesitate"} title={"Contact us"} />
        <div className="mt-8">
          <a
            className="text-4xl underline text-accent"
            href="tel:+201210023987"
          >
            +201210023987
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
