import { collection, Query } from '@firebase/firestore'
import withPrivateRoute from 'hoc/withPrivateRoute'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import * as SharedStyles from 'shared/styles'
import { Question } from 'shared/types'

const Game = () => {
  const firestore = useFirestore()

  const questionCollection = collection(firestore, 'questions') as unknown as Query<Question>

  const { status, data: questions } = useFirestoreCollectionData<Question>(questionCollection)
  console.dir(questions)

  if (status === 'loading') {
    return <span>loading...</span>
  }

  return <SharedStyles.PageContainer>{questions.map((question) => question.question)}</SharedStyles.PageContainer>
}

export default withPrivateRoute(Game)
