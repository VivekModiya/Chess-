export type Piece =
  | 'R'
  | 'N'
  | 'B'
  | 'Q'
  | 'K'
  | 'P'
  | ''
  | 'r'
  | 'n'
  | 'b'
  | 'q'
  | 'k'
  | 'p'

export type BoardPosition = Piece[][]

export type SquarePosition =
  | '00'
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '30'
  | '31'
  | '32'
  | '33'
  | '34'
  | '35'
  | '36'
  | '37'
  | '40'
  | '41'
  | '42'
  | '43'
  | '44'
  | '45'
  | '46'
  | '47'
  | '50'
  | '51'
  | '52'
  | '53'
  | '54'
  | '55'
  | '56'
  | '57'
  | '60'
  | '61'
  | '62'
  | '63'
  | '64'
  | '65'
  | '66'
  | '67'
  | '70'
  | '71'
  | '72'
  | '73'
  | '74'
  | '75'
  | '76'
  | '77'

export type MovesHistory = {
  startPosition: SquarePosition
  endPosition: SquarePosition
  startPiece: Piece
  endPiece: Piece
}[][]

const a = {
  templateName: 'organization_notify_owner_of_user_app_access_revoked',
  organizationDetails: {
    adminLogoUrl: '<https://example.com/logo.png>',
    workspaceDomain: 'example.com',
    organizationName: 'Example Organization',
    organizationWebsiteUrl: '<https://example.org>',
    organizationContactNumber: '+1-234-567-8900',
    organizationType: 'workspace',
    verticalName: 'political',
  },
  entityDetails: {
    revokedFromUserName: 'John Doe', // Name of the user whose access was revoked
    revokedFromUserEmail: 'john.doe@example.com',
    revokedByUserName: 'Jane Smith', // Name of the user who revoked the app access
    revokedByUserEmail: 'jane.smith@example.com',
    revokedByUserAvatar: '<https://example.com/avatar.png>',
    applicationNames: ['Example App 1', 'Example App 2'],
  },
}
