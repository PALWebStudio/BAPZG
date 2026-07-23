"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Download,
  AlertTriangle,
  FileX,
  X,
  Scan,
} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const MIN_SCALE = 0.5;
const MAX_SCALE = 2.5;
const SCALE_STEP = 0.2;

const btnClass =
  "flex size-9 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light disabled:opacity-30 disabled:hover:bg-transparent";

type Props = {
  pdfUrl?: string;
  title: string;
  onClose?: () => void;
};

export default function PdfReader({ pdfUrl, title, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [fitWidth, setFitWidth] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time post-hydration flag, not derived render state
    setMounted(true);
  }, []);

  useEffect(() => {
    function updateWidth() {
      if (pageAreaRef.current) setContainerWidth(pageAreaRef.current.clientWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  function toggleFullscreen() {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  }

  function zoomIn() {
    setFitWidth(false);
    setScale((s) => Math.min(MAX_SCALE, +(s + SCALE_STEP).toFixed(2)));
  }

  function zoomOut() {
    setFitWidth(false);
    setScale((s) => Math.max(MIN_SCALE, +(s - SCALE_STEP).toFixed(2)));
  }

  if (!pdfUrl) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border border-dashed border-black/[0.15] bg-cream py-20 text-center">
        <FileX size={32} className="text-muted/40" aria-hidden="true" />
        <p className="max-w-sm text-[14px] leading-relaxed text-muted/60">
          PDF файлът на „{title}“ предстои да бъде добавен от екипа на БАПЗГ.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-[var(--radius-lg)] border border-black/[0.06] bg-wine shadow-[var(--shadow-card)] ${
        isFullscreen ? "flex h-screen flex-col" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 bg-wine-deep px-4 py-3">
        <p className="truncate pr-2 text-[13px] font-semibold text-white">{title}</p>
        <div className="flex items-center gap-1">
          <button type="button" onClick={zoomOut} aria-label="Намали мащаба" className={btnClass}>
            <ZoomOut size={16} />
          </button>
          <button
            type="button"
            onClick={() => setFitWidth(true)}
            aria-pressed={fitWidth}
            title="Побери по ширина"
            aria-label="Побери по ширина"
            className={`${btnClass} ${fitWidth ? "bg-white/15 text-white" : ""}`}
          >
            <Scan size={16} />
          </button>
          <button type="button" onClick={zoomIn} aria-label="Увеличи мащаба" className={btnClass}>
            <ZoomIn size={16} />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Изход от цял екран" : "Цял екран"}
            className={btnClass}
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
          <a href={pdfUrl} download className={btnClass} aria-label="Свали PDF">
            <Download size={16} />
          </a>
          {onClose && (
            <button type="button" onClick={onClose} aria-label="Затвори четеца" className={btnClass}>
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <div
        ref={pageAreaRef}
        className={`flex justify-center overflow-auto bg-black/25 p-4 ${isFullscreen ? "flex-1" : "max-h-[75vh] min-h-[420px]"}`}
      >
        {mounted && (
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages: n }) => {
              setNumPages(n);
              setPageNumber(1);
              setLoadError(false);
            }}
            onLoadError={() => setLoadError(true)}
            loading={<ReaderSpinner />}
            error={<ReaderErrorState />}
          >
            <Page
              pageNumber={pageNumber}
              width={fitWidth && containerWidth ? containerWidth - 32 : undefined}
              scale={fitWidth ? undefined : scale}
              loading={<ReaderSpinner />}
            />
          </Document>
        )}
      </div>

      {numPages && !loadError && (
        <div className="flex items-center justify-center gap-4 bg-wine-deep px-4 py-3">
          <button
            type="button"
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            aria-label="Предишна страница"
            className={btnClass}
          >
            <ChevronLeft size={18} />
          </button>
          <span className="min-w-[110px] text-center text-[13px] text-white/80">
            Страница {pageNumber} от {numPages}
          </span>
          <button
            type="button"
            onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            aria-label="Следваща страница"
            className={btnClass}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

function ReaderSpinner() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 text-white/60">
      <div className="size-8 animate-spin rounded-full border-2 border-white/20 border-t-gold" />
      <p className="text-[13px]">Зареждане...</p>
    </div>
  );
}

function ReaderErrorState() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-3 px-6 text-center text-white/70">
      <AlertTriangle size={28} className="text-gold" aria-hidden="true" />
      <p className="max-w-sm text-[13.5px] leading-relaxed">
        Файлът не успя да се зареди. Опитайте отново по-късно или го свалете директно.
      </p>
    </div>
  );
}
