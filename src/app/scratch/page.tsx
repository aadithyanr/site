"use client"

import type React from "react"

import { Checkbox } from "@/components/ui/checkbox"

export default function Scratch() {
  const projects = [
    {
      name: "linux containers in c",
      completed: true,
      description: "A minimal container runtime implementation",
      link: "https://github.com/aadithyanr/linux-containers",
      category: "systems",
    },
    {
      name: "http server in c++",
      completed: true,
      description: "A lightweight HTTP server built from scratch",
      link: "https://github.com/aadithyanr/http-server",
      category: "networking",
    },
    {
      name: "port scanner in rust",
      completed: true,
      description: "A fast, concurrent port scanner",
      link: "https://github.com/aadithyanr/rportscan",
      category: "networking",
    },
    {
      name: "dns server in rust",
      completed: true,
      description: "A DNS server implementation",
      link: "https://github.com/aadithyanr/dns-server",
      category: "networking",
    },
    {
      name: "arithmetic interpreter in go",
      completed: true,
      description: "A simple interpreter for arithmetic expressions",
      link: "https://github.com/aadithyanr/arithmetic-interpreter",
      category: "languages",
    },
    {
      name: "bf interpreter in c",
      completed: true,
      description: "An interpreter for the Brainfuck language",
      link: "https://github.com/aadithyanr/bf-interpreter",
      category: "languages",
    },
    {
      name: "programming language in py",
      completed: false,
      description: "A simple programming language implementation",
      link: "https://github.com/aadithyanr/my-lang",
      category: "languages",
    },
  ]

  return (
    <main className="flex flex-col gap-10 max-w-2xl">
      <div className="space-y-4">
        <h1 className="animate-in font-inter text-3xl font-bold" style={{ "--index": 1 } as React.CSSProperties}>
          Cracked Engineering
        </h1>
        <p
          className="animate-in text-text-light-body dark:text-text-dark-body"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          I&apos;m spending the next few months building things from scratch to learn how systems work at a fundamental
          level.
        </p>
      </div>

      <div className="animate-in grid gap-6" style={{ "--index": 3 } as React.CSSProperties}>
        {projects.map((project) => (
          <div
            key={project.name}
            className="group relative rounded-lg border border-neutral-200 bg-white/40 p-4 transition-all hover:bg-white"
          >
            <div className="flex items-start gap-3">
              <Checkbox checked={project.completed} className="mt-1 rounded-sm" />
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      {project.name}
                    </a>
                    <span className="rounded border border-neutral-200 px-1.5 py-0.5 text-xs text-neutral-500">{project.category}</span>
                  </div>
                </div>
                <p className="text-sm text-text-light-body dark:text-text-dark-body">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
