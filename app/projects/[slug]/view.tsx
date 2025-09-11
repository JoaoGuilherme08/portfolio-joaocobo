"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	useEffect(() => {
		// Só faz a chamada API se não estiver em uma build estática
		if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
			fetch("/api/incr", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ slug }),
			});
		}
	}, [slug]);

	return null;
};
