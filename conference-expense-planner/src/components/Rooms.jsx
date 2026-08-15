import { useDispatch, useSelector } from "react-redux";

import {
  incrementRoom,
  decrementRoom
} from "../redux/selectionsSlice";

import { rooms } from "../data/products";

function Rooms() {
  const dispatch = useDispatch();

  const selectedRooms = useSelector(
    (state) => state.selections.rooms
  );

  return (
    <section id="rooms" className="product-section">
      <h2>Rooms</h2>

      <div className="products-grid">
        {rooms.map((room) => {
          const quantity = selectedRooms[room.name] || 0;

          return (
            <div className="product-card" key={room.id}>
              <h3>{room.name}</h3>

              <p>Capacity: {room.capacity}</p>

              <p className="price">
                ${room.price.toLocaleString()}
              </p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    dispatch(decrementRoom(room.name))
                  }
                >
                  -
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() =>
                    dispatch(incrementRoom(room.name))
                  }
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Rooms;