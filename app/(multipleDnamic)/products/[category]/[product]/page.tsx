export function generateStaticParams() {
    return [
        { category: 't-shirt', product: '1' },
        { category: 'pants', product: '2' },
        { category: 'coat', product: '3' },
    ]
}
   
  // Three versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  // - /products/a/1
  // - /products/b/2
  // - /products/c/3

export default function Page({
    params,
  }: {
    params: { category: string; product: string }
  }) {
    const { category, product } = params
    return (
        <div className="container">
            <h1>Multiple Dynamic</h1>
            <p className="text-3xl">{category} / {product}</p>
        </div>
    )
}