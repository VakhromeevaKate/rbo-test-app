// NOT GOOD
//<ProductDetails products={products} productId={productId} productRowId={productRowId} />

// GOOD
<ProductDetails products={products}>
    <CommonProducts products={products} productId={productId} productRowId={productRowId}>
        {(entity) => {
            return (
                <CommonProductRow
                    showDetails={this.handleShowDetails}
                    product={entity}
                    key={entity.Id}
                />
            )
        }}
    </CommonProducts>
</ProductDetails >
