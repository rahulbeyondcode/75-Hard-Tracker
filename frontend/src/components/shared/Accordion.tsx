import React from "react";
import { Disclosure } from "@headlessui/react";

type PropTypes = {
  title: string;
  open: boolean;
  body: JSX.Element;
};

function Accordion(props: PropTypes) {
  const { title, body, open } = props;

  return (
    <React.Fragment key={title}>
      <Disclosure>
        {({ open: isOpen }) => (
          <div className="bg-white">
            <Disclosure.Button className="py-2 accordion_button">
              {title}
              {open || isOpen ? (
                <i className="fa-solid fa-chevron-down" />
              ) : (
                <i className="fa-solid fa-chevron-right" />
              )}
            </Disclosure.Button>
            {open || isOpen ? (
              <Disclosure.Panel className="text-gray-500 accordion-body" static>
                {body}
              </Disclosure.Panel>

            ) : ""}
          </div>
        )}
      </Disclosure>
      <br />
    </React.Fragment>
  );
}

export default Accordion;
