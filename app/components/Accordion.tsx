export default function Accordion() {
    return (
      <div className="space-y-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">First Item</div>
          <div className="collapse-content">
            <p>This is the first item's content.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Second Item</div>
          <div className="collapse-content">
            <p>This is the second item's content.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Third Item</div>
          <div className="collapse-content">
            <p>This is the third item's content.</p>
          </div>
        </div>
      </div>
    );
  }
  