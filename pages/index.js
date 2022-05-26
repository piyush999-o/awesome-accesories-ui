import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome Accesosries</title>
        <meta
          name="description"
          content="Awesome Accesories The Amazing Collections"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {props.products.data.map((item) => {
              const HOST = "http://localhost:1337";
              return (
                <div class="p-4 md:w-1/4">
                  <div class={`h-full border-2 border-gray-200 border-opacity-60 overflow-hidden ${styles.card}`}>
                    <img
                      loading="lazy"
                      class="lg:h-60 md:h-36 w-full object-cover object-center"
                      src={`${HOST}${item.attributes.images.data.attributes.url}`}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h2 class="tracking-widest text-s title-font font-medium text-gray-500 mb-2">
                        {item.attributes.category}
                      </h2>
                      <h1 class=" text-xl font-medium font-sans text-gray-900 mb-2.5">
                        {item.attributes.title}
                      </h1>
                      <p class="leading-relaxed font-sans mb-1">
                        {item.attributes.description}
                      </p>

                      <p className="mt-1 text-lg font-semibold text-violet-700">{item.attributes.price}.00</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:1337/api/products?populate=*");
  let products = await data.json();

  return {
    props: { products },
  };
}
