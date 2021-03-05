export default function CheckModal({
	checkResult,
	tags,
	handleCheckModalClose,
}) {
	return (
		<div className="modal__content">
			<div className="warning">
				<label>
					This feature is still under construction and only works for
					sentences.
				</label>
			</div>
			<div className="body flex flex-col flex-jc-c">
				<label className="title">Your Result:</label>
				<label>{checkResult}</label>
				<br />
				<table>
					<thead>
						<tr>
							<th>Text</th>
							<th>Part of Speech</th>
						</tr>
					</thead>
					<tbody>
						{tags?.map((tag) => {
							return (
								<tr>
									<td>{tag.text}</td>
									<td>{tag.tags.join(', ')}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>

			<div className="control flex flex-jc-c">
				<button type="button" onClick={handleCheckModalClose}>
					Close
				</button>
			</div>
		</div>
	);
}
