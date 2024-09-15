"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronUp, Instagram, Youtube } from "lucide-react";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ArtistPortfolio() {
  const [imgSelected, setImgSelected] = React.useState<{
    src: string;
    isSelected: boolean;
  }>({
    src: "",
    isSelected: false,
  });

  const [backToTopScroll, setBackToTopScroll] = React.useState(false);

  const ArrayPhotos = [
    { id: 0, src: "/assets/photos/perfil.png", name: "perfil" },
    { id: 1, src: "/assets/photos/antigu0 final.png", name: "antigu0 final" },
    {
      id: 2,
      src: "/assets/photos/CartoonStyleFinal.png",
      name: "CartoonStyleFinal",
    },
    { id: 3, src: "/assets/photos/dd.png", name: "dd" },
    { id: 4, src: "/assets/photos/niños.jpg", name: "dd" },
    {
      id: 5,
      src: "/assets/photos/viejo malo bocereto.png",
      name: "viejo malo bocereto",
    },
    {
      id: 6,
      src: "/assets/photos/jugando.jpg",
      name: "viejo malo bocereto",
    },
    {
      id: 7,
      src: "/assets/photos/kennyalbum.jpg",
      name: "viejo malo bocereto",
    },
    {
      id: 8,
      src: "/assets/photos/kenny.jpg",
      name: "viejo malo bocereto",
    },
    {
      id: 9,
      src: "/assets/photos/kennyagua.jpg",
      name: "viejo malo bocereto",
    },
    {
      id: 10,
      src: "/assets/photos/cuadro.jpg",
      name: "viejo malo bocereto",
    },
    {
      id: 11,
      src: "/assets/photos/kenny_anatomia.jpg",
      name: "viejo malo bocereto",
    },
    {
      id: 12,
      src: "/assets/photos/cuadro2.jpg",
      name: "viejo malo bocereto",
    },
  ];

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopScroll(true);
      } else {
        setBackToTopScroll(false);
      }
    });
  }, []);

  return (
    <>
      <section className="flex flex-col min-h-screen bg-background">
        <header className="sticky top-0 z-20 bg-background border-b">
          <div className="container flex items-center justify-between h-16 px-4">
            <h1 className="text-2xl font-bold">Nico Schönfeld</h1>
          </div>
        </header>

        <main className="flex-grow relative">
          <div className="relative h-64 md:h-80 bg-muted">
            <img
              src="/assets/photos/banner.jpg"
              alt="Cover Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <Avatar className="w-32 h-32 border-4 border-background -mt-16 md:-mt-20 relative z-10">
                <AvatarImage
                  src="/assets/photos/kenny.jpg"
                  alt="Nico Schönfeld"
                />

                <AvatarFallback>Nico Schönfeld</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-3xl font-bold mb-2">NicoSch4</h2>
                <p className="text-muted-foreground mb-4">
                  Visual artist specializing in vibrant, abstract paintings
                  inspired by nature and emotions.
                </p>
                <div className="flex space-x-2">
                  <Link
                    href="https://www.instagram.com/nicosch4/?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </Button>
                  </Link>

                  {/*  <Button variant="outline" size="sm">
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </Button> */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {ArrayPhotos?.map((item, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer aspect-square overflow-hidden rounded-md border border-black/5"
                  onClick={() =>
                    setImgSelected({
                      src: item.src,
                      isSelected: true,
                    })
                  }
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Suscríbete a mi boletín
              </h3>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="max-w-sm"
                />
                <Button type="submit">Suscribir</Button>
              </form>
            </div>
          </div>

          {backToTopScroll && (
            <Button
              className="fixed bottom-5 right-3"
              onClick={scrollUp}
              size={"icon"}
            >
              <ChevronUp />
            </Button>
          )}
        </main>

        <footer className="bg-muted">
          <div className="container px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground">
                &copy; {moment().format("YYYY")} Nico Schönfeld. Todos los
                derechos reservados.
              </p>
              <div className="w-full md:w-auto flex flex-col items-start justify-center md:flex-row">
                <Button variant="ghost" size="sm">
                  Política de privacidad
                </Button>
                <Button variant="ghost" size="sm">
                  Términos de servicio
                </Button>
                <Button variant="ghost" size="sm">
                  Contacto
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </section>

      <AnimatePresence>
        {imgSelected.isSelected && (
          <motion.div
            className="fixed top-0 left-0 bg-black/80 backdrop-blur-md w-full h-screen flex items-center justify-center z-30"
            onClick={() =>
              setImgSelected({
                isSelected: false,
                src: "",
              })
            }
          >
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              src={imgSelected?.src}
              alt="wda"
              width="100%"
              className="max-w-[80%] md:max-w-[50%] lg:max-w-[30%] rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
