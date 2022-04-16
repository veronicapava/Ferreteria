import React from "react"
import { connect } from "react-redux"
import ArticleSell from "../Atoms/ArticleSell"

const Cart = ({ articlesState }) => {
  return (
    <div>
      Carrito:
      <p>
        {articlesState.map((art) => (
          <ArticleSell item={art} key={article.id} />
        ))}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  articlesState: state.articlesState,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
