const App = () => {
	return (
		<div className="container">
			<div className="header">
				<h1>JEE CUTOFFS</h1>
				<h4>An effort by Sauraj & Pratham</h4>
			</div>
			<div className="body">
				<div className="filter">
					<h1>Filters:</h1>
					<div className="filter-basic">
						<div className="filter-institute">
							Institute
							<select id="my-dropdown" name="my-dropdown">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>
						</div>
						<div className="filter-program">
							Program
							<select id="my-dropdown" name="my-dropdown">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>
						</div>
						<div className="filter-quota">
							Quota
							<select id="my-dropdown" name="my-dropdown">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>
						</div>
						<div className="filter-seat">
							Seat type
							<select id="my-dropdown" name="my-dropdown">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>
						</div>
						<div className="filter-gender">
							Gender
							<select id="my-dropdown" name="my-dropdown">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>
						</div>
					</div>
					<p>Fill in your filters accordingly...</p>
				</div>
				<div className="table">
					<h1>Cutoffs:</h1>
					<div className="filter-rank">
						Your Rank
						<input type="text" placeholder="Enter a rank..." />
					</div>
					<div className="table-data">	
					<table>
						<tr className="table-headings">
							<th>Institute</th>
							<th>Program</th>
							<th>Quota</th>
							<th>Seat type</th>
							<th>Gender</th>
							<th>Opening Rank</th>
							<th>Closing Rank</th>
						</tr>
						<tr className="table-entries">
							<td>Indian Institute of Technology Bhubaneswar</td>
							<td>Civil Engineering (4 Years, Bachelor of Technology)</td>
							<td>AI</td>
							<td>OPEN</td>
							<td>Gender-Neutral</td>
							<td>9193</td>
							<td>13624</td>
						</tr>
						<tr className="table-entries">
							<td>Indian Institute of Technology Bhubaneswar</td>
							<td>Civil Engineering (4 Years, Bachelor of Technology)</td>
							<td>AI</td>
							<td>OPEN</td>
							<td>Gender-Neutral</td>
							<td>9193</td>
							<td>13624</td>
						</tr>
						<tr className="table-entries">
							<td>Indian Institute of Technology Bhubaneswar</td>
							<td>Civil Engineering (4 Years, Bachelor of Technology)</td>
							<td>AI</td>
							<td>OPEN</td>
							<td>Gender-Neutral</td>
							<td>9193</td>
							<td>13624</td>
						</tr>
					</table>
					<p>All the best...</p>
					</div>
				</div>
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default App;
