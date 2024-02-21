import Product from "./Product";
import motorcycles from "./data";

const motorList = motorcycles.map((m) => (
  <Product motorcycles={m} key={m.name} />
));

const indian = motorcycles.filter((i) => i.brand == "Indian");
const indianList = indian.map((i) => <Product motorcycles={i} key={i.name} />);
const honda = motorcycles.filter((h) => h.brand == "Honda");
const hondaList = honda.map((h) => <Product motorcycles={h} key={h.name} />);
const kawasaki = motorcycles.filter((k) => k.brand == "Kawasaki");
const kawasakiList = kawasaki.map((k) => (
  <Product motorcycles={k} key={k.name} />
));
const subaru = motorcycles.filter((s) => s.brand == "Subaru");
const subaruList = subaru.map((s) => <Product motorcycles={s} key={s.name} />);
function ProductList() {
  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4">Our Products</h4>
          </div>
          <h3> Indian </h3>
          {indianList}
          <h3> Honda </h3>
          {hondaList}
          <h3> Kawasaki </h3>
          {kawasakiList}
          <h3> Subaru </h3>
          {subaruList}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
