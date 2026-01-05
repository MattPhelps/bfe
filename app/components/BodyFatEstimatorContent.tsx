export default function BodyFatEstimatorContent({ variant }: { variant: "upload" | "results" }) {
  return (
    <div className="max-w-3xl mx-auto px-4 mt-10 lg:mt-14">
      {variant === "upload" ? (
        <div className="prose prose-invert">
          <h2>How to get the most accurate estimate</h2>
          <ul>
            <li>Use a full-body photo (head to feet), facing the camera straight-on.</li>
            <li>Stand 2–3 meters away. Avoid wide-angle lens distortion up close.</li>
            <li>Bright, even lighting (window light is great). Avoid harsh shadows.</li>
            <li>Neutral pose, relaxed stomach. Don’t flex.</li>
            <li>Minimal clothing (underwear preferred). Shirts reduce accuracy.</li>
          </ul>

          <h3>What this tool can (and can’t) do</h3>
          <p>
            This is a visual estimate meant for fitness tracking — not a medical diagnosis.
            Results can vary based on lighting, pose, camera angle, and body type.
          </p>

          <h3>Privacy</h3>
          <p>
            Your image is used to generate the estimate. Don’t upload anything you wouldn’t want processed by a computer.
            (Only include specific retention/deletion claims if they are true for your implementation.)
          </p>

          <h3>Common reasons estimates look “wrong”</h3>
          <ul>
            <li>Mirror selfies (weird angles)</li>
            <li>Low light / strong shadows</li>
            <li>Clothes covering waist/chest</li>
            <li>Flexing, twisting, or angled posture</li>
          </ul>
        </div>
      ) : (
        <div className="prose prose-invert">
          <h2>How to interpret your result</h2>
          <p>
            Body fat % is an estimate of how much of your body weight is fat mass. It’s most useful for tracking trends
            over time, using similar photos.
          </p>

          <h3>Typical ranges (very rough)</h3>
          <ul>
            <li><strong>Men:</strong> 6–13% lean, 14–20% average, 21–27% high, 28%+ very high</li>
            <li><strong>Women:</strong> 14–20% lean, 21–28% average, 29–35% high, 36%+ very high</li>
          </ul>

          <h3>Make your next estimate more accurate</h3>
          <ul>
            <li>Full-body, head-on photo in underwear, well-lit room.</li>
            <li>Same lighting + same distance each time.</li>
            <li>Take weekly photos (daily is too noisy).</li>
            <li>Avoid filters, compression, or screenshots.</li>
          </ul>

          <h3>FAQ</h3>
          <details>
            <summary>Why did my estimate change a lot?</summary>
            <p>Small differences in lighting, posture, camera angle, and distance can swing a visual estimate.</p>
          </details>
          <details>
            <summary>Can I use a clothed photo?</summary>
            <p>You can, but accuracy usually drops because key cues are hidden.</p>
          </details>
          <details>
            <summary>Is this accurate compared to DEXA or calipers?</summary>
            <p>Consider this a directional estimate. Lab methods are more reliable, but still not perfect.</p>
          </details>
        </div>
      )}
    </div>
  );
}
