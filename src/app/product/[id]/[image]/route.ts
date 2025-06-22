import {fetchProductImageURLFromStorage} from "@/lib/firebase/data/products";

export const dynamic = 'force-dynamic'

type RouteProps = {
  params: {
    id: string;
    image: string;
  }
}

export async function GET(request: Request, {params: {id, image}}: RouteProps) {
  try {
    const imageUrl = await fetchProductImageURLFromStorage(id, image);
    const response = await fetch(imageUrl)
    return new Response(response.body, {headers: response.headers})
  } catch (e) {
    return new Response('Ops...Deu ruim', {
      status: 500,
    })
  }
}
