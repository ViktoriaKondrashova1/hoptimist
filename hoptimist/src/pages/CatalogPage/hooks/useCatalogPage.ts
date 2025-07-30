import { useState  } from 'react'

export const useCatalogPage = (): {
  currentPage: number;
  handlePageChange: (page: number) => void;
} => {
  const defaultPageNumber = 1
  const [currentPage, setCurrentPage] = useState<number>(defaultPageNumber)

  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  return { currentPage, handlePageChange }
}