import { Container, Typography, List, ListItem, Link } from '@mui/material';

function Privacy() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom align="left">
        プライバシーポリシー
      </Typography>

      <Typography variant="body1" paragraph align="left">
        このプライバシーポリシーは、お客様が当社のサービスを利用する際に適用されます。
      </Typography>

      <Typography variant="h5" gutterBottom align="left">
        個人情報の収集と利用
      </Typography>
      <Typography variant="body1" paragraph align="left">
        当社は、サービス提供のために以下のような個人情報を収集することがあります：
      </Typography>
      <List>
        <ListItem>氏名</ListItem>
        <ListItem>連絡先情報（メールアドレス、電話番号など）</ListItem>
        <ListItem>その他サービス利用に関連する情報</ListItem>
      </List>

      <Typography variant="h5" gutterBottom align="left">
        情報の共有と開示
      </Typography>
      <Typography variant="body1" paragraph align="left">
        当社は、法的要求に応じて情報を開示することがありますが、お客様の個人情報は第三者と共有されることはありません。
      </Typography>

      <Typography variant="h5" gutterBottom align="left">
        セキュリティ
      </Typography>
      <Typography variant="body1" paragraph align="left">
        当社は、お客様の情報を保護するために適切なセキュリティ対策を講じています。
      </Typography>

      <Typography variant="h5" gutterBottom align="left">
        プライバシーポリシーの変更
      </Typography>
      <Typography variant="body1" paragraph align="left">
        当社は、必要に応じてプライバシーポリシーを更新することがあります。変更があった場合は、このページでお知らせします。
      </Typography>

      <Typography variant="h5" gutterBottom align="left">
        お問い合わせ
      </Typography>
      <Typography variant="body1" paragraph align="left">
        プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いします：
      </Typography>
      <Typography variant="body1" align="left">
        メールアドレス: <Link href="mailto:info@example.com">info@example.com</Link>
      </Typography>
    </Container>
  );
}

export default Privacy;
