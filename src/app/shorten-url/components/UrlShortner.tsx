"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Copy } from "lucide-react";
import { createShortUrl } from "@/requests/post";

export default function UrlShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [expirationDate, setExpirationDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState("");
  const [progress, setProgress] = useState(100);
  const [initialDuration, setInitialDuration] = useState(0);

  const handleShorten = async () => {
    if (!longUrl) return;

    const responseApi = await createShortUrl({ url: longUrl });

    setShortUrl(responseApi.url);

    console.log("Short URL:", responseApi);

    const expire = new Date(responseApi.expirationDate);
    const totalSeconds = Math.floor((expire.getTime() - new Date().getTime()) / 1000);
    
    setExpirationDate(expire);
    setInitialDuration(totalSeconds);
    setProgress(100);
  };

  const handleCopy = async () => {
    if (shortUrl) {
      await navigator.clipboard.writeText(shortUrl);
      alert("Short URL copied to clipboard!");
    }
  };

  useEffect(() => {
    if (!expirationDate) return;

    const interval = setInterval(() => {
      const now = new Date();
      const difference = expirationDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft("Expired");
        setProgress(0);
        clearInterval(interval);
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);

        const totalSecondsLeft = Math.floor(difference / 1000);
        setProgress((totalSecondsLeft / initialDuration) * 100);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expirationDate, initialDuration]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-2">Shorten Your URL 🚀</h1>
      <p className="text-muted-foreground mb-6 text-center max-w-md">
        Paste your long URL below and generate a short, shareable link in
        seconds.
      </p>

      <div className="flex w-full max-w-md flex-col space-y-2">
        <Input
          type="text"
          placeholder="https://your-long-url.com"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button className="cursor-pointer" onClick={handleShorten}>
          Shorten
        </Button>
      </div>

      {shortUrl && (
        <Card className="mt-6 w-full max-w-md">
          <CardContent className="p-4 flex flex-col items-center">
            <p className="text-center text-sm text-muted-foreground">
              Your Short URL:
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-lg font-semibold">{shortUrl}</p>
              <Button
                className="cursor-pointer"
                variant="ghost"
                size="icon"
                onClick={handleCopy}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            {timeLeft && (
              <>
                <p className="text-xs text-muted-foreground mt-2">
                  Expires in: {timeLeft}
                </p>
                <Progress value={progress} className="w-full mt-2" />
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
