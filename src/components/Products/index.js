/** @jsx jsx */
import {Grid, jsx} from 'theme-ui'
import {ProductCard} from './ProductCard'

export {Product} from './Product'
export {ProductCard} from './ProductCard'

export const Products = ({title, nodes, ...props}) => (
  <Grid columns={[1, 2, 3]} sx={{width: 'full'}} {...props}>
    {nodes &&
      nodes.map(product => <ProductCard key={product.id} {...product} />)}
  </Grid>
)
