type Props = {
  greeting: string
}

const ItemListContainer = ({greeting}: Props) => {
  return (
    <section className={`mt-4 mx-auto`}>
      <h1>{greeting}</h1>
    </section>
  );
};

export default ItemListContainer;
