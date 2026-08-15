import { useState } from "react";

import Navbar from "./Navbar";
import Rooms from "./Rooms";
import AddOns from "./AddOns";
import Meals from "./Meals";
import DetailsModal from "./DetailsModal";

function ProductPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <Navbar
        onShowDetails={() => setShowDetails(true)}
      />

      <main>
        <Rooms />

        <AddOns />

        <Meals />
      </main>

      {showDetails && (
        <DetailsModal
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
}

export default ProductPage;