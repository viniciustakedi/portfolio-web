"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { getOriginalUrl } from "@/requests/get";

export default function RedirectPage() {
  const router = useRouter();
  const params = useParams();
  const shortId = params?.id as string;

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOriginalUrl() {
      if (!shortId) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const response = await getOriginalUrl({ urlCode: shortId });
        router.push(response.url);
      } catch {
        setError(true);
        setLoading(false);
      }
    }

    fetchOriginalUrl();
  }, [shortId, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Loading...</h2>
            <p className="text-muted-foreground mb-4">
              Please wait while we redirect you to the original URL.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Oops! 🔍</h2>
            <p className="text-muted-foreground mb-4">
              We couldn&apos;t find the URL you&apos;re looking for. It might
              have expired or never existed.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
