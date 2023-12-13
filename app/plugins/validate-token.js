export default async (ctx) => {
  await ctx.store.dispatch('GET_USER', ctx)
}
