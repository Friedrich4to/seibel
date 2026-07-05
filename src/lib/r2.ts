export async function uploadFile(bucket: R2Bucket, key: string, file: File): Promise<void> {
	await bucket.put(key, file.stream(), {
		httpMetadata: { contentType: file.type },
	});
}

export async function deleteFile(bucket: R2Bucket, key: string): Promise<void> {
	await bucket.delete(key);
}

export function getMediaUrl(key: string): string {
	return `/api/media/${key}`;
}

export function imageKey(slug: string, filename: string): string {
	const ext = filename.split('.').pop() ?? 'jpg';
	return `images/${slug}.${ext}`;
}

export function pdfKey(slug: string): string {
	return `pdfs/${slug}.pdf`;
}
