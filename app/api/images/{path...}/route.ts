import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabaseServer'

export async function GET(
  req: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    const path = params.path.join('/') // ex: "covers/hero.jpg"
    const { data, error } = await supabaseServer.storage
      .from('images')
      .download(path)

    if (error || !data) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const ext = path.split('.').pop()?.toLowerCase()
    const type =
      ext === 'png' ? 'image/png'
      : ext === 'webp' ? 'image/webp'
      : ext === 'gif' ? 'image/gif'
      : 'image/jpeg'

    const buffer = Buffer.from(await data.arrayBuffer())

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': type,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
