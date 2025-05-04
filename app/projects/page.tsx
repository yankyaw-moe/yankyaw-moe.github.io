"use client";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { useState } from "react";

const metadata: Metadata = {
  title: "Projects",
  description: "Yan Kyaw Moe's Projects",
};

export default function Projects() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (projectIndex: number, section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [`${projectIndex}-${section}`]: !prev[`${projectIndex}-${section}`],
    }));
  };

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div className="box-border border-2 p-5 rounded-2xl h-auto mb-8 max-w-4xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              {project.url ? (
                <Link href={project.url} key={index} target="_blank">
                  <p className="text-blue-500 hover:underline text-xl font-medium">
                    {project.title}
                  </p>
                </Link>
              ) : (
                <p className="text-blue-500 text-xl font-medium">
                  {project.title}
                </p>
              )}

              <p className="text-sm text-gray-600">
                {project.from} - {project.to}
              </p>
            </div>

            <div className="space-y-1">
              {/* Description Section */}
              <div className="rounded-lg">
                <button
                  onClick={() => toggleSection(index, "description")}
                  className="w-full p-1 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="text-sm font-medium text-gray-500">
                    Description
                  </span>
                  <span className="transform transition-transform duration-200">
                    {openSections[`${index}-description`] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                      >
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                      >
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                      </svg>
                    )}
                  </span>
                </button>
                {openSections[`${index}-description`] && (
                  <div className="p-4 pt-1">
                    <p className="">{project.description}</p>
                  </div>
                )}
              </div>

              {/* Technologies Section */}
              <div className="rounded-lg">
                <button
                  onClick={() => toggleSection(index, "technologies")}
                  className="w-full p-1 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="text-sm font-medium text-gray-500">
                    Technologies
                  </span>
                  <span className="transform transition-transform duration-200">
                    {openSections[`${index}-technologies`] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                      >
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e3e3e3"
                      >
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                      </svg>
                    )}
                  </span>
                </button>
                {openSections[`${index}-technologies`] && (
                  <div className="p-4 pt-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="box-border border-2 p-2 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Responsibilities Section */}
              <div className="rounded-lg">
                <span
                  onClick={() => toggleSection(index, "responsibilities")}
                  className="w-full p-1 text-left flex justify-between items-center"
                >
                  <span className="text-sm font-medium text-gray-500">
                    Responsibilities
                  </span>
                  {/* <span className="transform transition-transform duration-200">
                    {openSections[`${index}-responsibilities`] ? "▼" : "▶"}
                  </span> */}
                </span>
                {/* {openSections[`${index}-responsibilities`] && ( */}
                <div className="p-4 pt-1">
                  <p className="">{project.responsible}</p>
                </div>
                {/* )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
