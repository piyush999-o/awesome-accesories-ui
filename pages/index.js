import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome Accesosries</title>
        <meta name="description" content="Awesome Accesories The Amazing Collections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container py-20 mx-0">
          <div className="flex flex-nowrap justify-center">

            {props.products.data.map((item) => {
              const HOST = "http://localhost:1337";
              return (
                <div className={`container lg:w-1/4 md:w-1/2 p-0 w-full ${styles.img} mx-0`} key={item.id}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className={`object-cover object-center h-full block ${styles.img}`} src={`${HOST}${item.attributes.images.data.attributes.url}`} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.attributes.category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.attributes.title}</h2>
                    p
                    <p className="mt-1">{item.attributes.price}.00</p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {

  let data = await fetch("http://localhost:1337/api/products?populate=*");
  let products = await data.json();
  console.log(products);

  return {
    props: { products },
  }
}

