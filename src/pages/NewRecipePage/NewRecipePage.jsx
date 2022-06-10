export default function NewRecipePage() {
  return (
    <>
    <h1>NewRecipePage</h1>
    <form >
      <h3>Image</h3>
      <input type="file" />
      <h3>Name of Cocktail</h3>
      <input type="text" placeholder="Cocktail Name" />
      <h3>Liquor</h3>
      <select name="" id="Liquor">
        <option value="whisky">Whisky</option>
        <option value="vodka">Vodka</option>
        <option selected value="tequila">Tequila</option>
        <option value="gin">Gin</option>
        <option value="rum">Rum</option>
      </select>
      <h3>Pour</h3>
      <select name="pour" id="pour">
        <option value="0.5">0.5oz</option>
        <option value="1">1oz</option>
        <option selected value="1.5">1.5oz</option>
        <option value="2">2oz</option>
        <option value="2.5">2.5oz</option>
        <option value="3">3oz</option>
      </select>
      <h3>Instructions</h3>
      <textarea placeholder="Instructions" name="instructions" id="" cols="30" rows="10"></textarea>
      <button type="submit">Add Cocktail</button>
    </form>
    </>
  );
}