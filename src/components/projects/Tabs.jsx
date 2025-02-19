import Button from "../../ui/Button";

function Tabs({ tab, setTab }) {
  return (
    <div className="mt-10 flex items-center">
      <Button
        action={() => setTab(0)}
        type="tab"
        className="rounded-s-full px-40 py-4 after:rounded-s-full"
      >
        tab 1
      </Button>
      <Button action={() => setTab(1)} type="tab" className="px-40 py-4">
        tab 2
      </Button>
      <Button
        action={() => setTab(2)}
        type="tab"
        className="rounded-e-full px-40 py-4 after:rounded-e-full"
      >
        tab 3
      </Button>
    </div>
  );
}

export default Tabs;
