import background from "../assets/generate.png";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppSection from "../components/AppSection";
import AppButton from "../components/AppButton";
import { AnimatePresence } from "framer-motion";

export default function Generate() {
  const navigate = useNavigate();
  const location = useLocation();
  const index = Number(location.pathname[location.pathname.length - 1]);
  return (
    <div>
      <AppSection
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "none",
        }}
      >
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 flex space-x-4">
          {index !== 1 && (
            <AppButton
              onClick={() => {
                navigate(`/generate/generate${index - 1}`);
              }}
              className={`w-28 mr-5 text-m px-2 py-1 text-white `}
            >
              Back
            </AppButton>
          )}

          {index !== 5 && (
            <AppButton
              onClick={() => {
                navigate(`/generate/generate${index + 1}`);
              }}
              className={`w-28 text-m px-2 py-1 text-white `}
            >
              Next
            </AppButton>
          )}

          {index === 5 && (
            <AppButton className={`w-28 text-m px-2 py-1 text-white `}>
              Submit
            </AppButton>
          )}
        </div>
      </AppSection>
    </div>
  );
}
